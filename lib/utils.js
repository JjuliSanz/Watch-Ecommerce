// Get data from json-server
export async function getProducts(value) {
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

// Get products by lowest price from json-server
export async function getLowestPrice() {
  const res = await fetch(
    "http://localhost:4000/products?_sort=price&_order=asc"
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

// Get products by highest price from json-server
export async function getHighestPrice() {
  const res = await fetch(
    "http://localhost:4000/products?_sort=price&_order=desc"
  );

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

// Get product by id from json-server
export async function getProductById(id) {
  const res = await fetch(`http://localhost:4000/products?id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

// Get products from Amazon RapidAPI
export async function getAmazonRapidAPI() {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/search?query=Luxury%20watch&page=1&country=US&category_id=aps&product_condition=NEW";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e57eba05camshb3f27837fb21862p14de53jsn9892fd2c39c5",
      "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const result = await res.text();
  const data = JSON.parse(result);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return data;
}

// Get products by lowest price from Amazon RapidAPI
export async function getAmazonLowestPriceRapidAPI() {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/search?query=Luxury%20watch&page=1&country=US&sort_by=LOWEST_PRICE&category_id=aps&product_condition=NEW";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e57eba05camshb3f27837fb21862p14de53jsn9892fd2c39c5",
      "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const result = await res.text();
  const data = JSON.parse(result);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return data;
}

// Get products by highest price from Amazon RapidAPI
export async function getAmazonHighestPriceRapidAPI() {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/search?query=Luxury%20watch&page=1&country=US&sort_by=HIGHEST_PRICE&category_id=aps&product_condition=NEW";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e57eba05camshb3f27837fb21862p14de53jsn9892fd2c39c5",
      "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const result = await res.text();
  const data = JSON.parse(result);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return data;
}

// Get product by id from Amazon RapidAPI
export async function getAmazonRapidAPIProductById(id) {
  const url = `https://amazon23.p.rapidapi.com/product-details?asin=${id}&country=US`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e57eba05camshb3f27837fb21862p14de53jsn9892fd2c39c5",
      "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const result = await res.text();
  const data = JSON.parse(result);

  if (!res.ok) {
    console.error("Failed to fetch data:", res.status, res.statusText);
    throw new Error("failed to fetch data");
  }

  return data;
}
