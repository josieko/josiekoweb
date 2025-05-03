interface ArticleProps {
  image: string;
  imageDescription: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}
const Article = ({
  image,
  imageDescription,
  title,
  description,
  date,
  author,
  content,
}: ArticleProps) => {
  return (
    <div>
      <img src={image} alt={imageDescription} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
};

export default Article;
