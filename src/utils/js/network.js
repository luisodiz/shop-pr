export const getApiResource = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log('Could not fetch.', response.status);
      return false;
    }

    return await response.json();
  } catch(e) {
    console.log('Could not fetch.', e.message);
    return false;
  }
};

// (async () => {
//   const body = await getApiResource(`${SERVER_ROOT}/${OHOTA_ROOT}/${OHOTA_PRODUCTS}`);
//   console.log(body);
// })();