
export default {
  async get(url: string){
    try {
      return await fetch(url, {
        method: 'GET',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": ""
        },
      }).then(response => response.json())
    } catch (error) {
      console.error('Error:', error);
    }
  },
  async post(url: string, params : object){
    try {
      return await fetch(url, {
        method: 'POST',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": ""
        },
        body: JSON.stringify(params),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  },
  async patch(url: string, params : object){
    try {
      return await fetch(url, {
        method: 'PATCH',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": ""
        },
        body: JSON.stringify(params),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  },
  async put(url: string, params : object){
    try {
      return await fetch(url, {
        method: 'PUT',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": ""
        },
        body: JSON.stringify(params),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  },
  async delete(url: string, params : object){
    try {
      return await fetch(url, {
        method: 'DELETE',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": ""
        },
        body: JSON.stringify(params),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  },


}