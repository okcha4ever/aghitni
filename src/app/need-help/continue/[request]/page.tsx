import Form from "@/components/need-help/continue/Form";

const page = ({ params }: { params: { request: string } }) => {
  // to capitalize the fist letter
  const request = params.request;
  const capitalizedRequest = request.charAt(0).toUpperCase() + request.slice(1);
  // ---

  return (
    <main className="space-y-10 py-5">
      <div className="text-center">
        Continue With Your Help Request:{" "}
        <span className="text-red-500">
          {decodeURI(capitalizedRequest).replace("%26", "&")}
        </span>
      </div>
      <Form />
    </main>
  );
};

export default page;
