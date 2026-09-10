import { listStars } from "@/utils/list-stars";

interface Props {
  review: string;
  author: string;
  reviewCategory: string;
}

export function ReviewCard({ review, author, reviewCategory }: Props) {
  return (
    <div className="relative px-7 py-6 bg-card rounded-2xl border-2 border-quinary shadow text-start transition duration-250 hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-lg grid content-between">
      <div>
        <div className="mb-3">
          <div className="flex gap-1">
            {listStars("RED")}
          </div>

          <span className="absolute top-4 right-7 text-6xl font-accent leading-none text-secondary">”</span>
        </div>

        <p className="text-quaternary font-medium mb-4">“{review}”</p>
      </div>

      <div>
        <p className="uppercase font-bold text-primary">{author}</p>
        <p className="text-sm">{reviewCategory}</p>
      </div>
    </div>
  );
}
