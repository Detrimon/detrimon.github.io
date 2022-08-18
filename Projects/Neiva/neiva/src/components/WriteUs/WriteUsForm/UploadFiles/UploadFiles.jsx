/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import { useState } from "react";
import { connector } from "./connector";
import styles from "./UploadFiles.module.scss";

function uploadFiles(
  e,
  files,
  setFiles,
  updateFilesUploadErrors,
  uploadFileToServer
) {
  const fileSizeLimitInBytes = 10 * 1024 * 1024; // 10 МБ
  const aLimitErrors = [];
  console.log(setFiles);
  const aNewFiles = [];
  const uploadedItems = [...files];
  const oFiles = e.target.files;

  debugger;

  const filesLng = uploadedItems.length;

  Object.keys(oFiles).forEach(function (key) {
    let uploadingItem = oFiles[key];

    debugger;

    if (uploadingItem.size > fileSizeLimitInBytes) {
      return aLimitErrors.push(
        `Размер файла ${uploadingItem.name} превышает допустимые ${
          fileSizeLimitInBytes / 1024 / 1024
        } МБ`
      );
    }

    let isAlreadyUploaded = false;
    for (let i = 0; i < filesLng; i++) {
      let uploadedItem = uploadedItems[i];
      // debugger;
      if (
        uploadedItem.lastModified === uploadingItem.lastModified &&
        uploadedItem.lastModifiedDate.toString() ===
          uploadingItem.lastModifiedDate.toString() &&
        uploadedItem.name === uploadingItem.name &&
        uploadedItem.size === uploadingItem.size &&
        uploadedItem.type === uploadingItem.type
      ) {
        isAlreadyUploaded = true;
        break;
      }
    }

    if (!isAlreadyUploaded) {
      aNewFiles.push(uploadingItem);
    }
  });

  updateFilesUploadErrors(aLimitErrors);

  // Где-то здесь необходимо будет выполнить функцию

  const aResultItems = [...aNewFiles, ...uploadedItems];

  aResultItems.forEach(function (file) {
    uploadFileToServer(file);
  });

  // reader.setFiles(aResultItems);

  // 1 Отбираем повторяющиеся файлы. Если объект из files полностью совпадает с объектом из e.target.files, то его исключаем, в противном случае добавляем

  debugger;
}

function renderErrors(aErrors) {
  if (aErrors.length === 0) {
    return null;
  }

  return aErrors.map((item) => {
    return typeof item === "string" && item.length > 0 ? <li>{item}</li> : null;
  });
}

function renderPreview(loadedFiles) {
  if (loadedFiles.length === 0) {
    return null;
  }

  return loadedFiles.map((item) => {
    // Скорее всего item - это будет объект, поэтому его надо будет как-то распарсить...
    return (
      <li key={item.guid}>
        {/* TODO: item.guid заменить на идентификатор файла, если будет такой, в
        противном случае index. */}
        <span className="icon-attach"></span>
        <span>{item.title}</span>
        {/*TODO: item.title заменить на название файла
        из объекта, когда будет известна структура объекта */}
      </li>
    );
  });
}

const UploadFiles = ({
  isErrors = true,
  uploadErrorsList,
  updateFilesUploadErrors,
  uploadFileToServer,
}) => {
  const [files, setFiles] = useState([]);
  console.log(files);
  return (
    <div className={styles.uploadFiles}>
      <div className={styles.uploadPreview}>
        <ul>
          {renderPreview([
            { title: "Название файла 1", guid: "lsdkjkj32ljk23kl" },
            { title: "Название файла 2", guid: "lkj23l4l23k4j" },
            { title: "Название файла 3", guid: "lkj3lkj4l23k4j" },
          ])}
        </ul>
      </div>
      {isErrors ? (
        <div className={styles.uploadErrors}>
          <ul>{renderErrors(uploadErrorsList)}</ul>
        </div>
      ) : null}

      <div className={styles.uploadInput}>
        <label htmlFor="idInputFiles">+ Прикрепить файл</label>
        <input
          onChange={(e) =>
            uploadFiles(
              e,
              files,
              setFiles,
              updateFilesUploadErrors,
              uploadFileToServer
            )
          }
          id="idInputFiles"
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          name="file"
        />
        <p>Максимальный размер файла 10 МБ</p>
      </div>
    </div>
  );
};

export default connector(UploadFiles);
