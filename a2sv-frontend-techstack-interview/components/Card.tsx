import Image from "next/image";

type cardProps = {
  location: string;
  name: string;
  distance: string;
  emails: string[];
  status: string;
  telephones: string[];
  imageUrl: string;
};

const Card = ({
  location,
  name,
  distance,
  status,
  emails,
  telephones,
  imageUrl,
}: cardProps) => {
  return (
    <div className="flex flex-col lg:flex-row xl:gap-11 gap-5 items-center pb-5 lg:pb-0 lg:pr-4 w-9/10 relative rounded-3xl bg-card-bg/5 max-w-sm lg:max-w-5xl">
      <Image
        src={imageUrl}
        width={332}
        height={232.48}
        alt="card image"
        className="object-cover rounded-t-3xl lg:rounded-3xl xl:h-[232.48px] xl:w-[332px] h-[250px] lg:h-[200px] w-full lg:w-[290px]"
      />

      <div className="flex-grow px-4 w-full">
        <div className="mb-12.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-72 xl:max-w-96">
            <p className="text-card-bg font-light text-xs xl:text-sm">
              {location}
            </p>

            <h2 className="font-bold xl:text-2xl text-custom-black">{name}</h2>

            <p className="flex gap-2.5 items-center">
              <Image
                src="/assets/distance-icon.svg"
                width={17}
                height={17}
                alt="distance icon"
              />

              <span className="font-light text-sm text-distance">
                {distance}
              </span>
            </p>
          </div>

          <p
            className={`${status === "Open" ? "bg-open" : "bg-close"} px-3 lg:px-1.5 xl:px-3 py-1 rounded-2xl font-semibold text-xs xl:text-sm ${status === "Open" ? "text-open-text" : "text-custom-red"}`}
          >{`${status} Now`}</p>
        </div>

        {/* contact info */}
        <div className="flex text-sm text-distance gap-5">
          <div className="flex gap-1 items-start">
            <Image
              src="/assets/tele.svg"
              width={15.75}
              height={15.19}
              alt="telephone icon"
              className="mt-0.5"
            />

            <div>
              {telephones.map((telephone, idx) => (
                <p key={idx}>{telephone}</p>
              ))}
            </div>
          </div>

          {emails.length !== 0 && (
            <div className="flex gap-1 items-start">
              <Image
                src="/assets/email.svg"
                width={17.5}
                height={13.51}
                alt="telephone icon"
                className="mt-0.5"
              />

              <div>
                {emails.map((email, idx) => (
                  <p key={idx}>{email}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
