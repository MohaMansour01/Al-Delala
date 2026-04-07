import Footer from "@/src/components/Footer";
import AddNewAdForm from "@/src/components/forms/AddNewAdForm";
import Header from "@/src/components/Header";

export default function AddAdPage() {
  return (
    <div className="bg-[#F8F1E5]">
      <Header />
        <div className="max-w-4xl mx-auto py-12">
          <AddNewAdForm />
        </div>
      <Footer />
    </div>
  );
}
