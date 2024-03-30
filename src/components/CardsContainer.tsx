type Props = {
  children?: JSX.Element[];
};

const CardsContainer = ({ children }: Props) => {
  return (
    <div className="container-fluid">
      <div className="row g-1 gy-5">{children}</div>
    </div>
  );
};

export default CardsContainer;
