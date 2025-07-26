
│
├── /app
│   ├── _layout.js                ← Main navigation layout (can be Stack or Tabs)
│   ├── index.js                  ← Start screen ("Start Shopping")
│
│   ├── /home                     ← Tab or stack route for main shopping area
│   │   ├── layout.js            ← Home-specific layout (Tabs or Stack inside)
│   │   ├── index.js              ← Product List screen
│   │   └── [id].js               ← Product Details screen
│
│   ├── cart.js                   ← Cart screen (can be full screen or modal)
│   
│
├── /components
│   ├── CustomButton.js           ← Reusable button
│   └── ProductCard.js            ← Reusable product display
    └── BottomBar.js               ← custom bottom tab

│
├── /data
│   └── products.js               ← Static product data

├── /assets
│   └── /images
│       └── shopping.jpg          ← Image for Start screen
