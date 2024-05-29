import { countries } from "@/lib/countries";
import React, { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { Label } from "./label";
import { InputText } from "./inputText";
import { Popover } from "./popover";
import { Button } from "./button";

interface CountryI {
  pais: string;
  img: string;
  ddi: number;
  continente: string;
}

function PopoverContent({
  countries,
  isOpen,
  width,
  onChangeSearch,
  value,
}: {
  countries: CountryI[];
  isOpen?: boolean;
  width?: number;
  onChangeSearch?: (text: string) => void;
  value?: string;
}) {
  React.useEffect(() => {
    const element = document.getElementById("popover");

    if (width) element!.style.width = `${width}px`;
  }, [isOpen, width]);

  return (
    <div className="eteg-flex eteg-flex-col">
      <InputText
        icon={FiSearch}
        inputClassName="eteg-rounded-b-none"
        onChange={(e) => onChangeSearch && onChangeSearch(e.target.value)}
        value={value}
      />

      {countries.map((country) => (
        <Button
          variant="ghost"
          key={country.pais}
          className="eteg-text-foreground eteg-justify-start"
          size="sm"
        >
          <img src={country.img} alt={country.pais} className="eteg-mr-4" />
          <div className="eteg-grid eteg-grid-cols-[30px_10px_auto] eteg-gap-4">
            <p>{`+${country.ddi}`}</p>
            <span>-</span>
            <p className="eteg-truncate">{country.pais}</p>
          </div>
        </Button>
      ))}
    </div>
  );
}

export interface InputPhoneProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  label?: string;
  value?: string;
  onChangeValue?: (value: string) => void;
}

const InputPhone = React.forwardRef<HTMLInputElement, InputPhoneProps>(
  (
    { value = "55", onChangeValue, error, label = "Telefone", ...props },
    ref
  ) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const divWidth = divRef.current?.parentElement?.clientWidth;

    const [search, setSearch] = useState("");
    const selectedCountry = countries.find(
      (country) => country.ddi.toString() === value.split(" ")[0]
    ) as CountryI;
    const filteredCountries = countries.filter(
      (country) =>
        country.pais.toLocaleLowerCase().includes(search.toLowerCase()) ||
        country.ddi.toString().includes(search) ||
        country.continente
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
    );
    const mostrarItens = filteredCountries.slice(0, 5);

    const phoneNumber =
      selectedCountry &&
      value.substring(selectedCountry.ddi.toString().length + 1);

    const [popoverIsOpen, setPopoverIsOpen] = useState(false);

    function phoneMask(telefone: string, pais: CountryI) {
      let telefoneTratado = telefone.replace(/[^0-9() -]/, "");

      if (pais.pais === "Brasil") {
        telefoneTratado = telefoneTratado.substring(0, 15);
        telefoneTratado = telefoneTratado.replace(/\D/g, "");
        telefoneTratado = telefoneTratado.replace(/^(\d{2})(\d)/g, "($1) $2");
        telefoneTratado = telefoneTratado.replace(/(\d)(\d{4})$/, "$1-$2");
      }

      if (pais.pais === "Estados Unidos") {
        telefoneTratado = telefoneTratado.substring(0, 14);
        telefoneTratado = telefoneTratado.replace(/\D/g, "");
        telefoneTratado = telefoneTratado.replace(/^(\d{3})(\d)/g, "($1) $2");
        telefoneTratado = telefoneTratado.replace(/(\d)(\d{4})$/, "$1-$2");
      }

      return telefoneTratado.trim();
    }

    function onChangeInput(value: string, country: CountryI) {
      const maxLength = 19 - country.ddi.toString().length;
      const formattedPhone = value
        .replace(/[^0-9() -]/, "")
        .substring(0, maxLength);

      onChangeValue && onChangeValue(formattedPhone);
    }

    return (
      <div
        data-error={!!error}
        ref={divRef}
        className="twp eteg-flex eteg-flex-col eteg-gap-3"
      >
        <Label aria-required={props.required}>{label}</Label>
        <div className="eteg-relative">
          <Popover.Root onOpenChange={setPopoverIsOpen} open={popoverIsOpen}>
            <Popover.Trigger asChild>
              <Button
                variant="ghost"
                disabled={props.disabled}
                className="eteg-flex eteg-gap-1 eteg-absolute eteg-border-r eteg-rounded-none eteg-border-r-input eteg-z-10"
              >
                <img src={selectedCountry.img} alt={selectedCountry.pais} />
                <FiChevronDown size={14} className="eteg-text-foreground" />
              </Button>
            </Popover.Trigger>
            <Popover.Content id="popover" align="start" className="eteg-p-0">
              <PopoverContent
                countries={mostrarItens}
                width={divWidth}
                isOpen={popoverIsOpen}
                onChangeSearch={(text) => setSearch(text)}
                value={search}
              />
            </Popover.Content>
          </Popover.Root>
          <InputText
            type="tel"
            value={phoneMask(phoneNumber, selectedCountry)}
            onChange={(e) => onChangeInput(e.target.value, selectedCountry)}
            name="Pais"
            inputClassName="eteg-pl-20"
            {...props}
            ref={ref}
          />
        </div>

        {error && <span>{error}</span>}
      </div>
    );
  }
);

InputPhone.displayName = "InputPhone";

export { InputPhone };
