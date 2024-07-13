import React, { useState } from "react";
import { Upload, message, Button } from "antd";
import FirebaseStorageManager from "./FirebaseStorageManager";
import { UploadOutlined } from '@ant-design/icons';
import "./styles.module.scss"; // Make sure to import your CSS file

const FirebaseImageUpload = ({ onUploadSuccess, path, filename, existingUrl }) => {
    const [fileList, setFileList] = useState([]);

    const isImage = (fileUrl) => {
        const imageExtensions = ['.png', '.jpeg', '.jpg', '.gif'];
        return imageExtensions.some(ext => fileUrl.includes(ext));
    };

    const isPDF = (fileUrl) => fileUrl.includes('.pdf');

    const customRequest = async ({ file, onSuccess, onError }) => {
        try {
            const fileUrl = await FirebaseStorageManager.uploadFile(file, path, filename);
            onSuccess({ url: fileUrl });
            message.success(`${file.name} file uploaded successfully.`);
            if (onUploadSuccess) {
                onUploadSuccess(fileUrl);
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            onError(error);
            message.error(`${file.name} file upload failed.`);
        }
    };

    const handleChange = (info) => {
        let newFileList = [...info.fileList];
        if (info.file.status === "done" && info.file.response) {
            newFileList = newFileList.map((file) => {
                if (file.response && file.response.url) {
                    return {
                        ...file,
                        url: file.response.url,
                    };
                }
                return file;
            });
        }
        setFileList(newFileList);
        if (info.file.status === "done") {
            console.log("Uploaded Image URL:", info.file.response.url);
        }
    };

    const itemRender = (originNode, file, fileList, actions) => {
        return (
            // <div className="custom-file-list-item" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'black', padding: '10px', borderRadius: '4px', marginBottom: '8px', border: '1px solid #d9d9d9' }}>
            <div className="custom-file-list-item" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'orange',
                padding: '5px',
                // borderRadius: '4px',
                marginTop: '10px',
                borderRadius: 4,
                marginBottom: '8px',
                // border: '1px solid #d9d9d9'
            }}>
                {originNode}
            </div>
        );
    };

    return (
        <div>
            {existingUrl && (
                <div>
                    {isImage(existingUrl) ?
                        <img src={existingUrl} alt="Uploaded File" style={{ height: '120px', margin: 20 }} /> :
                        isPDF(existingUrl) ?
                            <img src="@assets/icons/pdficon.png" alt="PDF Icon" style={{ height: '70px', margin: 20 }} /> :
                            null
                    }
                    <Button
                        type="text"
                        href={existingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white" }}
                    >
                        Öffnen/herunterladen
                    </Button>
                </div>
            )}
            <Upload
                customRequest={customRequest}
                fileList={fileList}
                onChange={handleChange}
                itemRender={itemRender}
            >
                <Button type="primary"
                        style={{ margin: '0', background: "#fdca41", color: "#000", fontSize: 15 }}>
                    Datei Hochladen
                </Button>
            </Upload>
        </div>
    );
};

export default FirebaseImageUpload;
