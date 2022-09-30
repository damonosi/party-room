import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePickerComp = ({ register }) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  const inputRef = useRef();

  return (
    <div className="relative inline-block">
      <input
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
          range[0].endDate,
          "dd/MM/yyyy",
        )}`}
        id="data"
        readOnly
        ref={inputRef}
        className="px-1 py-2 border rounded"
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne}>
        {open && (
          <DateRangePicker
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="absolute left-1/2 top-10 -translate-x-2/4"
          />
        )}
        <div>
          <input
            {...register("data.dePe")}
            type="text"
            value={`${format(range[0].startDate, "dd/MM/yyyy")}`}
            className="hidden"
            id="dePe"
          />
          <input
            {...register("data.panaPe")}
            type="text"
            value={`${format(range[0].endDate, "dd/MM/yyyy")}`}
            className="hidden"
            id="panaPe"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePickerComp;
