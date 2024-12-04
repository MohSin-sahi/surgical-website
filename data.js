const menuItems = [
  { name: "home", path: "./index.html" },
  { name: "e-catalogue", path: "#" },
  {
    name: "products",
    path: "./products.html",
    pos: "relative",
    catagory: [
      {
        productName: "single use",
        subCatagory: [
          "Diagnostics",
          "Surgical Handles",
          "Scissors",
          "Dressing Forceps",
          "Artery Forceps",
          "Oral Instruments",
          "Towel, Sponge Holding Forceps",
          "Suture Instruments",
          "Retractors",
          "Cholecystectomy & Gall Stone",
          "Intestinal Clamps",
          "Gynecology",
          "Obstetrics Instruments",
          "Dermatology",
          "Peritoneum,Hysterectomy Clamps",
          "Urology",
          "Amputation Instruments",
          "Bone Surgery",
          "Suction Tubes",
          "Plaster Cast Instruments",
          "Rib Spreaders",
          "Bronchus,Organ Forceps",
          "Atrauma Bulldog Clamps",
          "Atrauma Forceps",
          "Patient Treatment Items",
          "Vascular Measuring Device, Forceps",
          "Treatment Room Items",
          "Vascular Dilators",
          "Dissection Instruments",
        ],
      },
      {
        productName: "surgical",
        subCatagory: [
          "Diagnostics",
          "Surgical Handles",
          "Scissors",
          "Dressing Forceps",
          "Artery Forceps",
          "Oral Instruments",
          "Towel, Sponge Holding Forceps",
          "Suture Instruments",
          "Retractors",
          "Cholecystectomy & Gall Stone",
          "Intestinal Clamps",
          "Gynecology",
          "Obstetrics Instruments",
          "Dermatology",
          "Peritoneum,Hysterectomy Clamps",
          "Urology",
          "Amputation Instruments",
          "Bone Surgery",
          "Suction Tubes",
          "Plaster Cast Instruments",
          "Rib Spreaders",
          "Bronchus,Organ Forceps",
          "Atrauma Bulldog Clamps",
          "Atrauma Forceps",
          "Patient Treatment Items",
          "Vascular Measuring Device, Forceps",
          "Treatment Room Items",
          "Vascular Dilators",
          "Dissection Instruments",
        ],
      },
      {
        productName: "dental",
        subCatagory: [
          "Diagnostics",
          "Surgical Handles",
          "Scissors",
          "Dressing Forceps",
          "Artery Forceps",
          "Oral Instruments",
          "Towel, Sponge Holding Forceps",
          "Suture Instruments",
          "Retractors",
          "Cholecystectomy & Gall Stone",
          "Intestinal Clamps",
          "Gynecology",
          "Obstetrics Instruments",
          "Dermatology",
          "Peritoneum,Hysterectomy Clamps",
          "Urology",
          "Amputation Instruments",
          "Bone Surgery",
          "Suction Tubes",
          "Plaster Cast Instruments",
          "Rib Spreaders",
          "Bronchus,Organ Forceps",
          "Atrauma Bulldog Clamps",
          "Atrauma Forceps",
          "Patient Treatment Items",
          "Vascular Measuring Device, Forceps",
          "Treatment Room Items",
          "Vascular Dilators",
          "Dissection Instruments",
        ],
      },
      {
        productName: "beauty",
        subCatagory: [
          "Diagnostics",
          "Surgical Handles",
          "Scissors",
          "Dressing Forceps",
          "Artery Forceps",
          "Oral Instruments",
          "Towel, Sponge Holding Forceps",
          "Suture Instruments",
          "Retractors",
          "Cholecystectomy & Gall Stone",
          "Intestinal Clamps",
          "Gynecology",
          "Obstetrics Instruments",
          "Dermatology",
          "Peritoneum,Hysterectomy Clamps",
          "Urology",
          "Amputation Instruments",
          "Bone Surgery",
          "Suction Tubes",
          "Plaster Cast Instruments",
          "Rib Spreaders",
          "Bronchus,Organ Forceps",
          "Atrauma Bulldog Clamps",
          "Atrauma Forceps",
          "Patient Treatment Items",
          "Vascular Measuring Device, Forceps",
          "Treatment Room Items",
          "Vascular Dilators",
          "Dissection Instruments",
        ],
      },
      {
        productName: "veterinary",
        subCatagory: [
          "Diagnostics",
          "Surgical Handles",
          "Scissors",
          "Dressing Forceps",
          "Artery Forceps",
          "Oral Instruments",
          "Towel, Sponge Holding Forceps",
          "Suture Instruments",
          "Retractors",
          "Cholecystectomy & Gall Stone",
          "Intestinal Clamps",
          "Gynecology",
          "Obstetrics Instruments",
          "Dermatology",
          "Peritoneum,Hysterectomy Clamps",
          "Urology",
          "Amputation Instruments",
          "Bone Surgery",
          "Suction Tubes",
          "Plaster Cast Instruments",
          "Rib Spreaders",
          "Bronchus,Organ Forceps",
          "Atrauma Bulldog Clamps",
          "Atrauma Forceps",
          "Patient Treatment Items",
          "Vascular Measuring Device, Forceps",
          "Treatment Room Items",
          "Vascular Dilators",
          "Dissection Instruments",
        ],
      },
      {
        productName: "ent",
        subCatagory: [
          "Diagnostics",
          "Surgical Handles",
          "Scissors",
          "Dressing Forceps",
          "Artery Forceps",
          "Oral Instruments",
          "Towel, Sponge Holding Forceps",
          "Suture Instruments",
          "Retractors",
          "Cholecystectomy & Gall Stone",
          "Intestinal Clamps",
          "Gynecology",
          "Obstetrics Instruments",
          "Dermatology",
          "Peritoneum,Hysterectomy Clamps",
          "Urology",
          "Amputation Instruments",
          "Bone Surgery",
          "Suction Tubes",
          "Plaster Cast Instruments",
          "Rib Spreaders",
          "Bronchus,Organ Forceps",
          "Atrauma Bulldog Clamps",
          "Atrauma Forceps",
          "Patient Treatment Items",
          "Vascular Measuring Device, Forceps",
          "Treatment Room Items",
          "Vascular Dilators",
          "Dissection Instruments",
        ],
      },
      {
        productName: "orthopedic",
        subCatagory: [
          "Diagnostics",
          "Surgical Handles",
          "Scissors",
          "Dressing Forceps",
          "Artery Forceps",
          "Oral Instruments",
          "Towel, Sponge Holding Forceps",
          "Suture Instruments",
          "Retractors",
          "Cholecystectomy & Gall Stone",
          "Intestinal Clamps",
          "Gynecology",
          "Obstetrics Instruments",
          "Dermatology",
          "Peritoneum,Hysterectomy Clamps",
          "Urology",
          "Amputation Instruments",
          "Bone Surgery",
          "Suction Tubes",
          "Plaster Cast Instruments",
          "Rib Spreaders",
          "Bronchus,Organ Forceps",
          "Atrauma Bulldog Clamps",
          "Atrauma Forceps",
          "Patient Treatment Items",
          "Vascular Measuring Device, Forceps",
          "Treatment Room Items",
          "Vascular Dilators",
          "Dissection Instruments",
        ],
      },
      {
        productName: "left hand instruments",
        subCatagory: [
          "Diagnostics",
          "Surgical Handles",
          "Scissors",
          "Dressing Forceps",
          "Artery Forceps",
          "Oral Instruments",
          "Towel, Sponge Holding Forceps",
          "Suture Instruments",
          "Retractors",
          "Cholecystectomy & Gall Stone",
          "Intestinal Clamps",
          "Gynecology",
          "Obstetrics Instruments",
          "Dermatology",
          "Peritoneum,Hysterectomy Clamps",
          "Urology",
          "Amputation Instruments",
          "Bone Surgery",
          "Suction Tubes",
          "Plaster Cast Instruments",
          "Rib Spreaders",
          "Bronchus,Organ Forceps",
          "Atrauma Bulldog Clamps",
          "Atrauma Forceps",
          "Patient Treatment Items",
          "Vascular Measuring Device, Forceps",
          "Treatment Room Items",
          "Vascular Dilators",
          "Dissection Instruments",
        ],
      },
    ],
  },
  { name: "event & exhibition", path: "#" },
  { name: "contacts", path: "./Contact.html" },
  { name: "about us", path: "./About.html" },
];

const menu = document.querySelector("#menu");
menuItems.forEach((item, i) => {
  let html = `<li class=${item.pos || ""}>
              <a
                href=${item.path}
                ${
                  item.catagory
                    ? 'id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" data-dropdown-trigger="hover"'
                    : ""
                }
                class="text-[1.4rem] uppercase leading-[3rem] lg:leading-[6rem] text-[#1f1f1f] hover:text-[#fe0100] font-medium text-center duration-300 ease-in-out transition-all"
                >${item.name}</a
              >`;

  if (item.catagory) {
    html += `<div id="multi-dropdown" class="w-[22.4rem] h-[33rem] bg-[#ffffff] z-10 hidden shadow border-t-[4px] border-t-[#fe0100]">
              <ul class="p-8 list-none flex flex-col" aria-labelledby="multiLevelDropdownButton">`;

    item.catagory.forEach((category, i) => {
      html += ` <li>
        <a
          href="#"
          id="doubleDropdownButton"
          data-dropdown-toggle="doubleDropdown${i}"
          data-dropdown-trigger="hover"
          data-dropdown-placement="right-start"
          class="flex justify-between items-center no-underline leading-[3.5rem] text-[1.6rem] capitalize text-[#000000] hover:text-[#fe0100] ease-in-out duration-300 transition-all"
          ><span>${category.productName}</span
          ><i class="fas fa-chevron-right"></i
        ></a>`;

      if (category.subCatagory) {
        html += `<div id="doubleDropdown${i}" class="z-10 hidden w-[50%] md:w-[61.7rem] h-[56.6rem] border-t-[4px] border-t-[#fe0100] bg-white drop-shadow-[0_0_3.5px_rgba(0,0,0,0.35)]">
                      <ul  class="p-8 list-none grid grid-cols-1 md:grid-cols-2 text-start"  aria-labelledby="doubleDropdownButton">`;
        category.subCatagory.forEach((subItem) => {
          html += `<li>
                              <a
                                href="#"
                                class="no-underline leading-[3.5rem] text-[1.6rem] capitalize text-[#000000] hover:text-[#fe0100] ease-in-out duration-300 transition-all"
                                ><span>${subItem}</span></a
                              ></li>`;
        });

        html += `</ul></div>`;
      }

      html += `</li>`;
    });
    html += `</li></ul></div>`;
  }

  html += `</li>`;
  menu.insertAdjacentHTML("beforeend", html);
});
