import path from '/assets/icons/path.svg'

interface Iprops {
  name: string,
  description: string
}
function RecommendColumn(props: Iprops) {
  const { name, description } = props;
  return (
    <div className="RecommendColumn w-[216px] h-[144px] bg-black text-center flex flex-col justify-center">
      <div className='text-primary-300 text-xl'>{name}</div>
      <img style={{ margin: '0 auto' }} src={path} alt="path" width={56} />
      <div className='text-white'>{description}</div>
    </div>
  );
}

export default RecommendColumn;
