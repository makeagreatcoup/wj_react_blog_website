import CardList from "@/components/card/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

export default function Home({searchParams}:{searchParams:{page:string}}) {

  const page = parseInt(searchParams.page) || 1

  return (
    <main className="">
     <Featured />
     <CategoryList />
     <div className="block lg:flex gap-2">
      <CardList page={page} />
      <Menu />
     </div>
    </main>
  )
}
