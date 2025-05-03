import { BookOpen } from "lucide-react";
import Article from "../components/article";

export default function postsHome() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-8 py-6">
        <div
          className="rounded-2xl p-4 mb-4"
          style={{
            background: "linear-gradient(135deg,rgb(246, 168, 59), #ff5e3a)",
          }}
        >
          <BookOpen className="h-12 w-12 text-white" />
        </div>
        <h1 className="!text-3xl font-bold text-white">Articles</h1>
        <p className="text-gray-400 text-center mt-2">
          My thoughts on software development and design
        </p>
      </div>

      <div>
        <Article
          image={"/blogLinear.png"}
          imageDescription={"Browser Window Resizing"}
          title={"Browser Window Resizing"}
          description={
            "How web browsers enforce restrictions on window resizing"
          }
          date={"April 15, 2025"}
          author={"Josie Ko"}
          content={""}
        />
      </div>
    </div>
  );
}
