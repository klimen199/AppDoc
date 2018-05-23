let previewFile = function previewFile(file, callback) {
    var reader = new FileReader();
    reader.onloadend = function () {
        return callback(reader.result);
    };
    reader.readAsDataURL(file);
};

export const modifyFiles = (fileList) => {
    let newFileList = fileList.map(file => {
        previewFile(file.originFileObj, function (previewDataUrl) {
            file.thumbUrl = previewDataUrl;
        });
        return file;
    })
    return newFileList;
}