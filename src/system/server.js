export default class Server {


    static serverRoot = "http://localhost:3000";
    //static serverRoot = "http://192.168.20.105:3000";
    //static serverRoot = "http://192.168.20.107:3000";//121.79.222.141
    //static serverRoot = "https://server.jobvideo.co";

    static async fetch(url, obj = {}) {

        try {

            //obj.token = '42890829058420938509423';
            /*
            const content = {
                data: JSON.stringify(obj),
                sig:
            }*/

            // const content = {
            //     data: JSON.stringify(obj),
            //     app_version: 1.0,
            //     app_platform: 'iOS',
            //     sig: 'some text',
            // };


            console.log('server URL::::'+url);

            let obj_post = {};
            obj_post.method ='POST';
            obj_post.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };
            obj_post.body =  JSON.stringify(obj);


            const response = await fetch(this.serverRoot + url, obj_post);
            console.log('server response::::', response);


            if (response.status === 200) {

                // no error

                const data = await response.json();
                console.log('send request success...:', data);


                return data;

            } else {

                // error happened

                //throw errorObj;
            }

        } catch(e) {

            // e.message: 'Network request failed'
            console.log("UNKNOWN ERROR HIT: ", e.message);


        }
    }

}