
const ImageCard = ({ item }: any) => {
  return (
    <div>
      <div>
        <img
          src={item.coverSrc}
          alt={item.title}
          className={
            "w-[50px] sm:w-[60px] h-[80px] sm:h-[100px] md:w-[180px] md:h-[170px] cursor-pointer rounded-md"
          }
        />
        <p style={{fontSize: 'small', textAlign: 'left'}}>{item.title}</p>
      </div>
    </div>
  );
};

export default ImageCard;
