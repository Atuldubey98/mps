export type OperationsProps = {
  toggleModal: VoidFunction;
};
export default function Operations(props: OperationsProps) {
  const { toggleModal } = props;
  return (
    <div className="p-2 flex align-center justify-center bg-slate-200 mt-3">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
        onClick={toggleModal}
      >
        Add Student
      </button>
    </div>
  );
}
