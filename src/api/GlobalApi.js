import { request, gql } from "graphql-request";

const GetCategory = async () => {
  const query = gql`
    query Category {
      categories {
        id
        name
        category {
          url
        }
      }
    }
  `;
  const results = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsyjjhz800uy07we1tz15xu3/master",
    query
  );

  return results;
};
const GetItems = async () => {
  const query = gql`
    query GetItems {
      items {
        id
        name
        icons {
          url
        }
      }
    }
  `;
  const results = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsyjjhz800uy07we1tz15xu3/master",
    query
  );

  return results;
};

const GetProducts = async (search_item, category) => {
  const query = gql`
    query GetProducts {
      products(
        where: {
          OR: [
            { brandName: "${search_item}" }
            { tag_contains_some: "${search_item}" }
            { name_contains: "${search_item}" }
          ]
          category: { _search: "${category}" }
        }
      ) {
        id
        name
        price
        productImage {
          url
        }
        tag
        description
        brandName
        category {
          name
        }
      }
    }
  `;
  const results = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

const createBooking = async (data) => {
  const query = gql`
    mutation creatingBooking {
      createBooking(data: { userId: ${data.userId}, product: { connect: { id: "${data.productId}" } } }) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;
  const results = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};
const deleteBooking = async (id) => {
  const query = gql`
    mutation deleteBooking {
      deleteManyBookings(where: { id: "${id}" }) {
        count
      }
    }
  `;
  const results = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};
const getBooking = async (data) => {
  const query = gql`
    query GetBooking {
      bookings(where: { userId: ${data.userId} }) {
        product {
          id
          name
          price
          productImage {
            url
          }
          brandName
        }
        id
      }
    }
  `;
  const results = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

const createCart = async (data) => {
  const query = gql`
    mutation CreateCart {
      createCart(data: { userId: ${data.userId}, products: { connect: { id: "${data.productId}" } }, quantity: 1 }) {
        id
      }
      publishManyCarts(to: PUBLISHED) {
        count
      }
    }
  `;
  const results = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

const updateCart = async (id, quantity) => {
  const query = gql`
    mutation UpdateCart {
      updateManyCarts(data: { quantity: ${quantity} }, where: { id: "${id}" }) {
        count
      }
      publishManyCarts(to: PUBLISHED) {
        count
      }
    }
  `;
  const results = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

const deleteCart = async (id) => {
  const query = gql`
    mutation deleteCart {
      deleteManyCarts(where: { id: "${id}" }) {
        count
      }
    }
  `;
  const results = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

const GetCart = async (data) => {
  const query = gql`
    query getCart {
      carts(where: { userId: ${data.userId} }) {
        products {
          id
          name
          price
          productImage {
            url
          }
          productstatus
          tag
          description
          brandName
          category {
            name
          }
        }
        id
        quantity
      }
    }
  `;
  const results = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

const RequestModify = async (data) => {
  const query = gql`
    mutation RequestModify {
      createModify(
        data: {
          userId: ${data.userid},
          modifystatus: Requested,
          modifyImage: "${data.image}",
          city: "${data.city}",
          country: "${data.country}",
          email: "${data.email}",
          phone: "${data.phone}",
          productChange: "${data.productChangeDetail}",
          productDetails: "${data.productDetail}",
          productName: "${data.productName}",
          purchasDate: "${data.purchaseDate}",
          zipcode: "${data.pin}",
          state: "${data.state}",
          modifyDesc: ""
        }
      ) {
        id
      }
      publishManyModifies(to: PUBLISHED) {
        count
      }
    }
  `;
  const results = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

const getModify = async (data) => {
  const query = gql`
    query GetModify {
      modifies(where: { userId: ${data} }) {
        id
        modifyDesc
        modifystatus
        updatedAt
        createdAt
      }
    }
  `;
  const results = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};
const GetOrder = async (data) => {
  const query = gql`
    query GetOrder {
      orders(where: { userId: ${data.userId} }, orderBy: createdAt_DESC) {
        address
        createdAt
        id
        name
        orderstatus
        paymentMod
        phone
        pin
        products {
          name
          id
          productImage {
            url
          }
          tag
          brandName
        }
        quantity
        totalPrice
        userId
        updatedAt
      }
    }
  `;
  const results = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};
const GetProductShow = async () => {
  const query = gql`
    query GetProductShow {
      products(last: 4) {
        id
        name
        price
        productImage {
          url
        }
        tag
        description
        brandName
        category {
          name
        }
      }
    }
  `;
  const results = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

const createOrder = async (data) => {
  const query = gql`
    mutation CreateOrder {
      createOrder(
        data: {
          paymentId: "${data.paymentId}"
          paymentMod: "${data.paymentMod}"
          phone: ${data.phone}
          pin: ${data.pin}
          address: "${data.address}"
          userId: ${data.userId}
          products: { connect: { id: "${data.productId}" } }
          name: "${data.name}"
          quantity: ${data.quantity}
          orderstatus: OrderRequested
          totalPrice: ${data.price}
        }
      ) {
        id
      }
      publishManyOrders(to: PUBLISHED) {
        count
      }
    }
  `;
  const results = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsyjjhz800uy07we1tz15xu3/master",
    query
  );
  return results;
};

export default {
  GetCategory,
  GetItems,
  GetProducts,
  createBooking,
  deleteBooking,
  getBooking,
  createCart,
  deleteCart,
  GetCart,
  updateCart,
  RequestModify,
  getModify,
  createOrder,
  GetOrder,
  GetProductShow,
};
