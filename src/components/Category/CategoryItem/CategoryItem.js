import Link from "next/link";

export default function CategoryItem() {
  return (
    <div>
      <div class="container  ">
        <Link class="card    shadow-md" href="#">
          <h3>This is option 1</h3>
          <p class="small">
            Card description with lots of great facts and interesting details.
          </p>
        </Link>
      </div>
    </div>
  );
}
