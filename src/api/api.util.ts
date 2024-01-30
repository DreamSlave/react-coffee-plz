
const token = `secret_xv2JxNIKcE6jnTqKJcwlB49264ov3BftEBrpRc3raU6`
export default {
  async get(url: string){
    try {
      return await fetch(url, {
        method: 'GET',
        headers: {
          "Notion-Version": "2022-06-28",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": token
        },
      });
    } catch (error) {
      console.error('Error:', error);
    }
  },
  async post(url: string, params : object){
    try {
      return await fetch(url, {
        method: 'POST',
        headers: {
          "Notion-Version": "2022-06-28",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": token
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
          "Notion-Version": "2022-06-28",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": token
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
          "Notion-Version": "2022-06-28",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": token
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
          "Notion-Version": "2022-06-28",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": token
        },
        body: JSON.stringify(params),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  },


}