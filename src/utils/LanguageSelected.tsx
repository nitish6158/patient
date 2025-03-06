import MyAppointment from '../screens/MyAppointment/MyAppointment';
import MyPrescription from '../screens/MyPrescription/MyPrescription';

const LanguageSelected = {
  // Login screen text
  login: {
    EN: 'Login',
    AR: 'تسجيل الدخول',
    FN: 'Connexion',
  },
  signup: {
    EN: 'Sign Up',
    AR: 'اشتراك',
    FN: 'Sinscrire',
  },
  Medicine: {
    EN: 'Medicine',
    AR: 'دواء',
    FN: 'Médicament',
  },
  startCare: {
    EN: 'Start taking care of your health.',
    AR: 'ابدأ في الاعتناء بصحتك.',
    FN: 'Commencez à prendre soin de votre santé.',
  },
  loginToYourAccount: {
    EN: 'Login To Your Account',
    AR: 'تسجيل الدخول إلى حسابك',
    FN: 'Connectez-vous à votre compte',
  },
  skipLogin: {
    EN: 'Skip Login',
    AR: 'تخطي تسجيل الدخول',
    FN: 'Passer la connexion',
  },
  doctorConsultation: {
    EN: 'Doctor Consultation',
    AR: 'استشارة الطبيب',
    FN: 'Consultation médicale',
  },
  // Signin screen text
  newToMedicineApp: {
    EN: 'New to Medicine App?',
    AR: 'جديد في تطبيق الطب؟',
    FN: "Nouveau sur l'application Medicine?",
  },
  register: {
    EN: 'Register',
    AR: 'تسجيل',
    FN: "S'inscrire",
  },
  userName: {
    EN: 'User Name *',
    AR: 'اسم المستخدم *',
    FN: "Nom d'utilisateur *",
  },
  enterUserName: {
    EN: 'Enter Username',
    AR: 'أدخل اسم المستخدم',
    FN: "Entrez le nom d'utilisateur",
  },
  password: {
    EN: 'Password *',
    AR: 'كلمة المرور *',
    FN: 'Mot de passe *',
  },
  enterPassword: {
    EN: 'Enter Password',
    AR: 'أدخل كلمة المرور',
    FN: 'Entrez le mot de passe',
  },
  forgetPassword: {
    EN: 'Forget Password?',
    AR: 'نسيت كلمة المرور؟',
    FN: 'Mot de passe oublié?',
  },
  loginSuccessful: {
    EN: 'Login Successful',
    AR: 'تم تسجيل الدخول بنجاح',
    FN: 'Connexion réussie',
  },
  // Signup screen
  alreadyHaveAnAccount: {
    EN: 'Already Have An Account?',
    AR: 'هل لديك حساب؟',
    FN: 'Vous avez déjà un compte?',
  },
  email: {
    EN: 'Email *',
    AR: 'البريد الإلكتروني *',
    FN: 'Email *',
  },
  enterEmail: {
    EN: 'Enter Email',
    AR: 'أدخل البريد الإلكتروني',
    FN: "Entrez l'email",
  },
  mobileNo: {
    EN: 'Mobile No. *',
    AR: 'رقم الهاتف المحمول *',
    FN: 'Numéro de portable *',
  },
  enterNumber: {
    EN: 'Enter Number',
    AR: 'أدخل الرقم',
    FN: 'Entrez le numéro',
  },
  dateOfBirth: {
    EN: 'Date of Birth',
    AR: 'تاريخ الميلاد',
    FN: 'Date de naissance',
  },
  confirmPassword: {
    EN: 'Confirm Password *',
    AR: 'تأكيد كلمة المرور *',
    FN: 'Confirmez le mot de passe *',
  },
  enterConfirmPassword: {
    EN: 'Enter Confirm Password',
    AR: 'أدخل تأكيد كلمة المرور',
    FN: 'Entrez le mot de passe de confirmation',
  },
  selectGender: {
    EN: 'Select Gender',
    AR: 'حدد الجنس',
    FN: 'Sélectionnez le sexe',
  },
  submit: {
    EN: 'Submit',
    AR: 'إرسال',
    FN: 'Soumettre',
  },
  male: {
    EN: 'Male',
    AR: 'ذكر',
    FN: 'Homme',
  },
  female: {
    EN: 'Female',
    AR: 'أنثى',
    FN: 'Femme',
  },
  other: {
    EN: 'Other',
    AR: 'آخر',
    FN: 'Autre',
  },
  // otp verification
  otpVerification: {
    EN: 'OTP\nVerification',
    AR: 'التحقق من OTP',
    FN: 'Vérification OTP',
  },
  enterOtpCode: {
    EN: 'Please enter the 6-digit code sent to',
    AR: 'يرجى إدخال الرمز المكون من 6 أرقام المرسل إلى',
    FN: 'Veuillez entrer le code à 6 chiffres envoyé à',
  },
  resend: {
    EN: 'Resend',
    AR: 'إعادة إرسال',
    FN: 'Renvoyer',
  },
  verifyAndSignUp: {
    EN: 'Verify & Sign Up',
    AR: 'تحقق واشترك',
    FN: 'Vérifiez et inscrivez-vous',
  },
  //Home screen
  health: {
    EN: 'How is your health today?',
    AR: 'كيف هي صحتك اليوم؟',
    FN: "Comment est votre santé aujourd'hui ?",
  },
  date: {
    EN: 'Friday, July 15',
    AR: 'الجمعة، 15 يوليو',
    FN: 'Vendredi 15 juillet',
  },
  upcomingAppointments: {
    EN: 'Upcoming Appointment',
    AR: 'الموعد القادم',
    FN: 'Rendez-vous à venir',
  },
  viewAll: {
    EN: 'View All',
    AR: 'عرض الكل',
    FN: 'Voir tout',
  },
  appointment: {
    EN: 'Appointment',
    AR: 'موعد',
    FN: 'Rendez-vous',
  },
  specialization: {
    EN: 'Specialization',
    AR: 'تخصص',
    FN: 'Spécialisation',
  },
  heart: {
    EN: 'Heart',
    AR: 'قلب',
    FN: 'Cœur',
  },
  brain: {
    EN: 'Brain',
    AR: 'دماغ',
    FN: 'Cerveau',
  },
  lungs: {
    EN: 'Lungs',
    AR: 'رئتان',
    FN: 'Poumons',
  },
  dentist: {
    EN: 'Dentist',
    AR: 'طبيب الأسنان',
    FN: 'Dentiste',
  },
  general: {
    EN: 'General',
    AR: 'عام',
    FN: 'Général',
  },
  kidney: {
    EN: 'Kidney',
    AR: 'كلى',
    FN: 'Rein',
  },
  ear: {
    EN: 'Ear',
    AR: 'أُذُن',
    FN: 'Oreille',
  },
  myAppointment: {
    EN: 'My Appointments',
    AR: 'مواعيدي',
    FN: 'Mes Rendez-vous',
  },
  upcoming: {
    EN: 'Upcoming',
    AR: 'القادم',
    FN: 'À venir',
  },
  completed: {
    EN: 'Completed',
    AR: 'مُكتَمِل',
    FN: 'Terminé',
  },
  cancelled: {
    EN: 'Cancelled',
    AR: 'ملغى',
    FN: 'Annulé',
  },
  cancel: {
    EN: 'Cancel',
    AR: 'إلغاء',
    FN: 'Annuler',
  },
  reschedule: {
    EN: 'Reschedule',
    AR: 'إعادة الجدولة',
    FN: 'Reprogrammer',
  },
  myChat: {
    EN: 'My Chat',
    AR: 'محادثتي',
    FN: 'Mon Chat',
  },
  myPrescription: {
    EN: 'My Prescription',
    AR: 'وصفتي الطبية',
    FN: 'Mon Ordonnance',
  },
};

export default LanguageSelected;
