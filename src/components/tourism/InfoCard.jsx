/* eslint-disable react/prop-types */
import styles from './infoCard.module.scss';

export default function InfoCard(props) {
  const { infoData, districts } = props;
  const distName = districts.find((el) => el.zip === infoData?.ZipCode);
  const pictureStyle = { backgroundImage: `url('${infoData?.Picture.PictureUrl1}')` };

  return (
    <div className={styles.infoCard}>
      <div className={styles.photoWrap}>
        <div className={styles.photo} style={pictureStyle} />
        <p>{infoData?.Picture.PictureDescription1}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.subTitle}>
          <p>
            {infoData?.City}
            {distName?.name}
          </p>
          <span>{infoData?.Class1}</span>
        </div>
        <div className={styles.title}>{infoData?.Name}</div>
        <div className={styles.contact}>
          <p>
            <span>{infoData?.Phone}</span>
            <span>{infoData?.Address}</span>
          </p>
          <p>{infoData?.WebsiteUrl}</p>
        </div>
        <div className={styles.description}>
          <p>景點介紹</p>
          {infoData?.DescriptionDetail}
        </div>
      </div>
    </div>
  );
}
