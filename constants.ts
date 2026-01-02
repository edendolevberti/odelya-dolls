import { Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = "972542339044";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי אודליה, אשמח לשמוע פרטים על הזמנת בובה סרוגה :)")}`;

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "ארנבי מתוקי",
    description: "בובת ארנב רכה ונעימה, מושלמת לתינוקות וילדים קטנים.",
    image: "https://picsum.photos/seed/bunny/400/400",
    tags: ["פופולרי", "רך במיוחד"]
  },
  {
    id: 2,
    title: "דובון שינה",
    description: "דובון קלאסי עם כובע שינה, עוזר לילדים להירדם בחיוך.",
    image: "https://picsum.photos/seed/bear/400/400",
    tags: ["קלאסי"]
  },
  {
    id: 3,
    title: "בובת ילדה אישית",
    description: "בובה בהתאמה אישית לפי צבע שיער ובגדים שתבחרו.",
    image: "https://picsum.photos/seed/dollll/400/400",
    tags: ["הזמנה אישית"]
  },
  {
    id: 4,
    title: "ג'ירפה צבעונית",
    description: "ג'ירפה גבוהה ושמחה, בצבעים שמעוררים את הדמיון.",
    image: "https://picsum.photos/seed/giraffe/400/400",
    tags: ["צבעוני"]
  },
  {
    id: 5,
    title: "חד קרן קסום",
    description: "בובה מהאגדות עם רעמה צבעונית וקרן מנצנצת.",
    image: "https://picsum.photos/seed/unicorn/400/400",
    tags: ["קסום"]
  },
  {
    id: 6,
    title: "סט חיות יער",
    description: "אוסף קטן של שועל, סנאי וקיפוד למשחק דמיון עשיר.",
    image: "https://picsum.photos/seed/forest/400/400",
    tags: ["סט מלא"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "מיכל",
    text: "הזמנתי מאודליה בובה לבת שלי ליום הולדת שנה, האיכות מדהימה והשירות היה כל כך לבבי!"
  },
  {
    id: 2,
    name: "דניאל",
    text: "רואים שכל תפר נעשה באהבה. הבובה נעימה למגע והילד לא עוזב אותה לרגע."
  },
  {
    id: 3,
    name: "שרית",
    text: "הזמנה אישית בעיצוב מיוחד, יצא בול כמו שדמיינתי. תודה רבה אודליה!"
  }
];