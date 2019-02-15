import React, { Component } from 'react';
class Usermessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ""
        }
    }

    render() {
        return (
            <div>
                <button id="uploadBtn" onClick={this.uploadImage}>上传</button>
                <input hidden ref="inputs" className="js_upFile cover1" onChange={this.changes} type="file" name="cover" accept="image/*" />
                <img style={{ width: "100%", height: "auto" }} src={this.state.url} />
            </div>
        );
    }
    uploadImage = () => {
        this.refs.inputs.click();
    }
    changes = (event) => {
        let file = event.target.files[0];
        let render = new FileReader();
        render.readAsDataURL(file);
        function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
        function dataURLtoFile(dataurl, filename = 'file') {
            let arr = dataurl.split(',')
            let mime = arr[0].match(/:(.*?);/)[1]
            let suffix = mime.split('/')[1]
            let bstr = atob(arr[1])
            let n = bstr.length
            let u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new File([u8arr], `${filename}.${suffix}`, { type: mime })
        }
        render.onload = () => {
            console.log(dataURLtoBlob(render.result))
            console.log(dataURLtoFile(render.result))
            this.setState({
                url: URL.createObjectURL(file)
            })
            let formData = new FormData();
            formData.append("file", file);
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://10.10.32.164:6021/manager/upload?r=1550198483867&token=1505_09c826ab04b24b76a57741c6ed2c1ba8");
            xhr.onload = () => {
                alert("success")
            }
            xhr.send(formData);
        }
    }

}
export default Usermessage;