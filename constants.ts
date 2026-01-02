import { Testimonial } from './types';

export const WHATSAPP_NUMBER = "972542339044";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("היי אודליה, אשמח לשמוע פרטים על הזמנת בובה סרוגה :)")}`;

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