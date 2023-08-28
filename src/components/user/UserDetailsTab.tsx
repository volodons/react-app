interface UserDetailsTabProps {
  tabNumber: number;
  currentTab: number;
  onClick: () => void;
  children: React.ReactNode;
}

function UserDetailsTab({
  tabNumber,
  currentTab,
  onClick,
  children,
}: UserDetailsTabProps): JSX.Element {
  return (
    <button
      type="button"
      className={
        currentTab === tabNumber
          ? "bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          : "bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default UserDetailsTab;
