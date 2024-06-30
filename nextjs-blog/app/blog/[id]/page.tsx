import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";

const BlogDetailPage = () => {
  return (
    <section>
      <BackButton />

      <div className="mb-8">
        <h1 className="text-2xl font-bold my-4">Blog one</h1>

        <ButtonAction />
      </div>

      <p className="text-slate-700">Post one content</p>
    </section>
  );
};

export default BlogDetailPage;
