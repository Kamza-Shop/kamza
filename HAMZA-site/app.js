const products = [
  {
    name: "Wireless Headphones",
    price: 35000,
    oldPrice: 42000,
    rating: 5,
    sold: 210,
    image: "https://picsum.photos/400/400?random=1"
  },
  {
    name: "Smart Watch",
    price: 52000,
    oldPrice: 65000,
    rating: 4,
    sold: 96,
    image: "https://picsum.photos/400/400?random=2"
  },
  {
    name: "Gaming Mouse",
    price: 18000,
    oldPrice: 24000,
    rating: 5,
    sold: 181,
    image: "https://picsum.photos/400/400?random=3"
  },
  {
    name: "Bluetooth Speaker",
    price: 27000,
    oldPrice: 32000,
    rating: 4,
    sold: 82,
    image: "https://picsum.photos/400/400?random=4"
  },
  {
    name: "Laptop Backpack",
    price: 21000,
    oldPrice: 28000,
    rating: 5,
    sold: 144,
    image: "https://picsum.photos/400/400?random=5"
  },
  {
    name: "Coffee Maker",
    price: 48000,
    oldPrice: 55000,
    rating: 4,
    sold: 61,
    image: "https://picsum.photos/400/400?random=6"
  },
  {
    name: "Air Fryer",
    price: 72000,
    oldPrice: 85000,
    rating: 5,
    sold: 47,
    image: "https://picsum.photos/400/400?random=7"
  },
  {
    name: "LED Desk Lamp",
    price: 16000,
    oldPrice: 22000,
    rating: 4,
    sold: 134,
    image: "https://picsum.photos/400/400?random=8"
  },
  {
    name: "Running Shoes",
    price: 39000,
    oldPrice: 47000,
    rating: 5,
    sold: 275,
    image: "https://picsum.photos/400/400?random=9"
  },
  {
    name: "Wireless Keyboard",
    price: 29000,
    oldPrice: 35000,
    rating: 5,
    sold: 103,
    image: "https://picsum.photos/400/400?random=10"
  }
];

const container = document.getElementById("products");

function stars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? '<span class="text-yellow-400">★</span>'
      : '<span class="text-gray-300">★</span>';
  }
  return html;
}

products.forEach(product => {

  container.innerHTML += `

    <div class="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 group">

      <div class="relative overflow-hidden">

        <img
        src="${product.image}"
        alt="${product.name}"
        class="w-full h-60 object-cover group-hover:scale-105 duration-300">

        <button class="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-green-700 hover:text-white transition">

          ❤

        </button>

      </div>

      <div class="p-4">

        <h3 class="font-medium text-gray-800 line-clamp-2">

          ${product.name}

        </h3>

        <div class="mt-3 flex items-center gap-2">

          <span class="text-green-700 font-bold text-xl">

            ₦${product.price.toLocaleString()}

          </span>

          <span class="text-gray-400 text-sm line-through">

            ₦${product.oldPrice.toLocaleString()}

          </span>

        </div>

        <div class="mt-2">

          ${stars(product.rating)}

        </div>

        <p class="text-sm text-gray-500 mt-2">

          ${product.sold} Sold

        </p>

        <button class="w-full mt-4 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">

          Add to Cart

        </button>

      </div>

    </div>

  `;

});