// Get data from json-server
export async function getProducts(value){
  let res;
  if (value) {
    res = await fetch(`http://localhost:4000/products?model_like=${value}`);
  } else {
    res = await fetch(`http://localhost:4000/products`);
  }
  
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
   
}

// Get data from json-server
export async function getProductsPrice(price) {
  let res;
  if (price) {
    res = await fetch(`http://localhost:4000/products?price_gte=${price}`);
  } else {
    res = await fetch(`http://localhost:4000/products`);
  }

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

export async function getLowestPrice(){
  const res = await fetch("http://localhost:4000/products?_sort=price&_order=asc");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

export async function getHighestPrice(){
  const res = await fetch("http://localhost:4000/products?_sort=price&_order=desc");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

// Get top products from json-server
export async function getTopProducts() {
  const res = await fetch("http://localhost:4000/products?destacado=1", {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

// Get data from json-server
export async function getProductById(id) {
  const res = await fetch(`http://localhost:4000/products?id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}


// Parameters from RapidAPI
const url =
  "https://aliexpress-datahub.p.rapidapi.com/item_search?q=scooter&sort=latest";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b1fae3edb6msh3b3c32695328e5dp10311fjsnc6be45f34c2c",
    "X-RapidAPI-Host": "aliexpress-datahub.p.rapidapi.com",
  },
};

// Get data from RapidAPI
export async function getRapidAPIProducts() {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

// Get data from RapidApi
export async function getRapidAPIProductById(id) {
  const url = `https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b1fae3edb6msh3b3c32695328e5dp10311fjsnc6be45f34c2c",
      "X-RapidAPI-Host": "aliexpress-datahub.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}