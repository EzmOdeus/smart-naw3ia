import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  SafeAreaView,
  Pressable,
  ListRenderItem, // لاستخدامها مع FlatList
} from 'react-native';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
 // استيراد الواجهة

// تأكد من أنك أعددت GEMINI_API_KEY في ملف .env
const API_KEY = 'AIzaSyCWaKLjvd_8ZWt3dgnGXggnxk-WkqTQMso';

if (!API_KEY) {
  console.warn(
    'ChatbotModal.tsx: Gemini API Key not found. Please set it in your .env file (GEMINI_API_KEY).'
  );
}

// تهيئة النموذج بحذر إذا لم يكن المفتاح موجودًا
let model: any; // استخدم 'any' مبدئيًا أو نوع أكثر تحديدًا إذا كنت تعرفه من SDK
if (API_KEY) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash-latest', // أو "gemini-pro"
    // إعدادات الأمان (اختياري ولكن موصى به)
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  });
}

interface ChatbotModalProps {
  visible: boolean;
  onClose: () => void;
}
// types.ts
export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
  }
const ChatbotModal: React.FC<ChatbotModalProps> = ({ visible, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const flatListRef = useRef<FlatList<Message>>(null);

  const initialBotMessageText: string =
    'أهلاً بك! أنا مساعدك الذكي الخاص بكلية التربية النوعية بجامعة الإسكندرية. كيف يمكنني مساعدتك اليوم؟';

  useEffect(() => {
    if (visible) {
      if (messages.length === 0) {
        setMessages([
          {
            id: Date.now().toString(),
            text: initialBotMessageText,
            sender: 'bot',
          },
        ]);
      }
    }
    // لا حاجة لمسح الرسائل هنا إلا إذا كانت هذه هي الرغبة عند كل إغلاق
  }, [visible]); // messages أزيلت من هنا لتجنب إعادة التشغيل عند كل رسالة جديدة

  const constructPrompt = (userInput: string): string => {
    return `أنت مساعد خبير ومتخصص فقط في الإجابة على الأسئلة المتعلقة بكلية التربية النوعية بجامعة الإسكندرية.
    مجالات تخصصك تشمل: شروط القبول، الأقسام العلمية (الاقتصاد المنزلي، التربية الفنية، التربية الموسيقية، تكنولوجيا التعليم والإعلام التربوي)،
    الدرجات العلمية، معلومات الاتصال، الأنشطة الطلابية، وأي معلومات أخرى ذات صلة مباشرة بالكلية.
    إذا سُئلت عن أي موضوع خارج نطاق الكلية، يرجى الرد بلطف بأنك متخصص فقط في شؤون كلية التربية النوعية بجامعة الإسكندرية.

    السؤال الحالي من المستخدم: "${userInput}"

     
    يرجى تقديم إجابة واضحة ومفيدة  باللغة العربية
    كما يمكن الاستعانه بالموقع الرسمي للكليه واستخراج المعلومات للرد علي الاسئلة هذا هو الرابط : https://edusp.alexu.edu.eg/index.php/ar/.
  دي صفحه قسم تكنولوجيا التعليم استخرج منها المعلومات https://edusp.alexu.edu.eg/index.php/ar/department/tec 
    دي صفحه قسم الاقتصاد المنزلي استخرج منها المعلومات https://edusp.alexu.edu.eg/index.php/ar/department/home-eco 
    دي صفحه قسم التربية الفنية استخرج منها المعلومات https://edusp.alexu.edu.eg/index.php/ar/department/art-edu
    دي صفحه قسم العلوم النفسية والتربوية استخرج منها المعلومات https://edusp.alexu.edu.eg/index.php/ar/department/psychological-sciences
`;
  };

  const handleSend = async () => {
    if (inputText.trim().length === 0 || isLoading || !API_KEY || !model) {
      if (!API_KEY || !model)
        console.error('Gemini API key or model is not initialized.');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString() + 'user',
      text: inputText,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const currentInput = inputText; // حفظ القيمة قبل مسحها
    setInputText('');
    setIsLoading(true);

    try {
      const prompt = constructPrompt(currentInput);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botResponseText = response.text();

      const botMessage: Message = {
        id: Date.now().toString() + 'bot',
        text: botResponseText,
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage: Message = {
        id: Date.now().toString() + 'bot_error',
        text: 'عذراً، حدث خطأ أثناء محاولة الحصول على إجابة. يرجى المحاولة مرة أخرى.',
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const renderMessage: ListRenderItem<Message> = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === 'user' ? styles.userBubble : styles.botBubble,
      ]}
    >
      <Text
        style={
          item.sender === 'user'
            ? styles.userMessageText
            : styles.botMessageText
        }
      >
        {item.text}
      </Text>
    </View>
  );

  if (!API_KEY && visible) {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalViewError}>
            <Text style={styles.modalText}>خطأ في الإعداد:</Text>
            <Text style={styles.modalText}>
              لم يتم العثور على مفتاح Gemini API.
            </Text>
            <Text style={styles.modalText}>
              يرجى التأكد من إعداده بشكل صحيح في ملف .env.
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onClose}
            >
              <Text style={styles.textStyle}>إغلاق</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.centeredView} onPress={onClose}>
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={styles.modalView}
        >
          <SafeAreaView style={styles.safeAreaModal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>مساعد كلية التربية النوعية</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardAvoiding}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
            >
              <FlatList
                ref={flatListRef}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                style={styles.chatArea}
                contentContainerStyle={{ paddingBottom: 10 }}
              />
              {isLoading && (
                <ActivityIndicator
                  size="small"
                  color="#007AFF"
                  style={{ marginVertical: 5 }}
                />
              )}
              <View style={styles.inputArea}>
                <TextInput
                  style={styles.input}
                  value={inputText}
                  onChangeText={setInputText}
                  placeholder="اسأل عن الكلية..."
                  placeholderTextColor="#999"
                  editable={!isLoading && !!API_KEY && !!model}
                />
                <TouchableOpacity
                  style={[
                    styles.sendButton,
                    (!API_KEY || !model || isLoading) &&
                      styles.sendButtonDisabled,
                  ]}
                  onPress={handleSend}
                  disabled={!API_KEY || !model || isLoading}
                >
                  <Text style={styles.sendButtonText}>إرسال</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

// الأنماط تبقى كما هي
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    width: '100%',
    height: '85%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewError: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  safeAreaModal: {
    flex: 1,
    width: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#333',
  },
  keyboardAvoiding: {
    flex: 1,
    width: '100%',
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  messageBubble: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 18,
    marginBottom: 8,
    maxWidth: '85%',
  },
  userBubble: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  botBubble: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 5,
  },
  userMessageText: {
    fontSize: 16,
    color: 'white',
  },
  botMessageText: {
    fontSize: 16,
    color: 'black',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  input: {
    flex: 1,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 22,
    paddingHorizontal: 18,
    marginRight: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 22,
  },
  sendButtonDisabled: {
    backgroundColor: '#a0cfff',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChatbotModal;
