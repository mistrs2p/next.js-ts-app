interface TestProps {
  firstName: string;
  lastName: string;
  age: number;
}

export const Test: React.FC<TestProps> = ({ firstName, lastName, age }) => {
  return (
    <div>
      <h1>
        Hello, my name is &nbsp; or{" "}
        <b>
          {firstName} {lastName}, and i am {age} yers old
        </b>
      </h1>
    </div>
  );
};
