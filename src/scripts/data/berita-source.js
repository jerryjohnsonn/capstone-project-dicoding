import API_ENDPOINT from '../globals/api-endpoint';

class BeritaSource {
  static async beritaSampah() {
    const response = await fetch(API_ENDPOINT.DATA, {
      method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default BeritaSource;
