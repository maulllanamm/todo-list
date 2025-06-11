interface TodoHeaderProps {
  title?: string;
  description?: string;
}

export const TodoHeader = ({
  title = "Todo App",
  description = "A simple todo application built with React hooks",
}: TodoHeaderProps) => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </header>
  );
};
