import axios from 'axios';


//for fetching items from database

export const fetchClothingItems = async () => {
   try {
    const response = await axios.get(`http://localhost:5000/api/clothings`);
    return response.data;
   } catch (error) {
    console.error('Error fetching clothing items: ', error);
    throw error;
   }
};

export const fetchHandcraftItems = async () => {
   try {
      const response = await axios.get('http://localhost:5000/api/handcrafts');
      return response.data;
   } catch (error) {
      console.error('Error fetching handicraft items: ', error);
      throw error;
   }
};

export const fetchAccessoriesItems = async () => {
   try {
      const response = await axios.get('http://localhost:5000/api/accessories');
      return response.data;
   } catch (error) {
      console.error('Error fetching accessories items: ', error);
      throw error;
   }
};

export const fetchSliderItems = async () => {
   try {
      const response = await axios.get('http://localhost:5000/api/slider');
      return response.data;
   } catch (error) {
      console.error('Error fetching slider items: ', error);
      throw error;
   }
};

//fetching particular product bt id
export const fetchProductById = async (id) => {
   try {
     const response = await axios.get(`http://localhost:5000/api/products/${id}`);
     return response.data;
   } catch (error) {
     console.error('Error fetching product:', error);
     throw error;
   }
 };

 //fetch reviews
 export const fetchReviews = async () => {
   try {
      const response = await axios.get('http://localhost:5000/api/rating');
      return response.data;
   } catch (error) {
      console.error('Error fetching reviews', error);
      throw error;
   }
 };







