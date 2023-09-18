import "../../pages/Contacts/contacts.css";

type NetworksProps = {
  name?: string;
  url?: string;
  network?: string;
};
export const Networks = ({ name, url, network }: NetworksProps) => {
  return (
    <li className="item-list">
      {name}:
      <a href={url} target="_blank" className="red" rel="whatsapp noreferrer">
        {network}
      </a>
    </li>
  );
};
