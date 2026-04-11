export const TOTAL_PAGES = 9;

export const RATING_QS = [
  "How easy was it to find a store?",
  "How easy was it to browse products?",
  "How easy was it to add items to your basket?",
  "How easy was the checkout process?",
  "How clear was the pricing and delivery info?",
  "How would you rate the app's look and feel?",
  "How would you rate product images and descriptions?",
  "How confident would you feel placing a real order?",
  "How does this compare to other delivery apps?",
  "Overall, how would you rate the app?",
];

export const YN_QS = [
  "Would you download this app if it were live today?",
  "Would you place a real order in the next 7 days?",
  "Would you pay a delivery fee?",
  "Would you recommend it to someone?",
  "Does this solve a real problem for you?",
];

export const TASKS = [
  { num: 1, title: "First Look", instruction: "Open the app. Look at the home screen for 30 seconds. Don't tap anything yet.", question: "What do you think this app does? What stands out?" },
  { num: 2, title: "Find a Store", instruction: "Try to find an African, Caribbean, or Asian grocery store near you.", question: "How did you find it? Was it easy or confusing?" },
  { num: 3, title: "Browse Products", instruction: "Pick a store and look through its products. Find something you'd actually buy.", question: "Could you find what you wanted? Were prices and descriptions clear?" },
  { num: 4, title: "Add to Basket", instruction: "Add two items to your basket.", question: "Was the add-to-basket action obvious? Any confusion?" },
  { num: 5, title: "Go to Checkout", instruction: "Go to your basket and start checkout. Stop before paying.", question: "Was the checkout clear? Anything confusing about delivery, pricing, or payment?" },
  { num: 6, title: "Explore Freely", instruction: "Spend 2 minutes exploring wherever you want.", question: "What did you notice? Anything missing or broken?" },
];

export const THOUGHT_FIELDS = [
  { key: "like", label: "What did you like most?" },
  { key: "dislike", label: "What did you like least?" },
  { key: "confusing", label: "What was confusing or unclear?" },
  { key: "missing", label: "What's missing?" },
  { key: "current", label: "How do you currently buy ethnic or international groceries?" },
  { key: "add", label: "Specific product, store, or cuisine you'd want us to add?" },
  { key: "regular", label: "Would you use this app regularly? Why or why not?" },
  { key: "delivery", label: "Would you pay for delivery? What feels like a fair price?" },
];
