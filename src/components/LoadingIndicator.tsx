type LoadingProps = {
  displayMessage: string;
};
export const LoadingIndicator = ({ displayMessage }: LoadingProps) => {
  return (
    <div className="loading_wrapper">
      <div className="loading_wrapper_loader">{displayMessage}</div>
    </div>
  );
};
