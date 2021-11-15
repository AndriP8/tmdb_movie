import axios from "axios";

const callAPI = async ({ url, method, data }) => {
  const response = await axios({ url, method, data }).catch(
    (err) => err.response
  );
  const res = {
    error: false,
    message: response?.data?.message,
    data: response.data,
  };
  return res;
};

export default callAPI;
