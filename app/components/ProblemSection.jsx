import React from "react";

export default function ProblemSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <h2 className="nadpisPage mb-6 md:mb-8">
          Spousta webů vznikla s dobrým úmyslem.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-700 font-medium">
          Dnes ale firmám nepomáhá růst.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-700">
          Mnoho firem má web, který <i className="italic">„nějak funguje"</i>.<br />
          Je hezký na pohled, ale nepřináší nové poptávky ani lepší obchodní výsledky.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700">
          Ne proto, že by byl špatně nakódovaný.
          Většinou chybí jasný záměr a struktura.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold  text-gray-900">
              Návštěvník během pár vteřin nepochopí, co firma nabízí
            </h3>
          </div>
          
          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold  text-gray-900">
              Web mluví hlavně o firmě, ne o problémech zákazníků
            </h3>
          </div>
          
          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold  text-gray-900">
              Uživatel neví, kam jít dál a co je dalším krokem
            </h3>
          </div>
          
          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold  text-gray-900">
              Změny se dělají pocitově, bez dat a zpětné vazby
            </h3>
          </div>
        </div>
        
        {/* <p className="text-lg md:text-xl leading-relaxed text-center md:text-left text-gray-700 max-w-3xl mb-12">
          Web pak žije vlastním životem – a firma s ním.
        </p> */}

        {/* Role / Pozicování sekce */}
        <div className="mt-16 pt-12">
          <h2 className="nadpisPage mb-6 md:mb-8">
            Moje role nezačíná u designu ani u kódu.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-2 text-gray-700 mb-8">
            Pomáhám firmám přemýšlet o webu v širším kontextu...
          </p>
          <div className="mb-8 text-base md:text-lg text-gray-700 flex flex-wrap gap-2">
          <div className="p-4 bg-red-50 rounded-lg w-fit">
            <h3 className="text-xl font-semibold  text-gray-900">
              Jakou má roli v byznysu<span className="text-red-400 text-2xl font-extrabold ml-1">?</span></h3>
            </div>
            <div className="p-4 bg-red-50 rounded-lg w-fit">
              <h3 className="text-xl font-semibold  text-gray-900">
                Koho má oslovovat<span className="text-red-400 text-2xl font-extrabold ml-1">?</span></h3>
            </div>
            <div className="p-4 bg-red-50 rounded-lg w-fit">
              <h3 className="text-xl font-semibold  text-gray-900">
                Co má podporovat a přinášet<span className="text-red-400 text-2xl font-extrabold ml-1">?</span></h3>
            </div>
            <div className="p-4 bg-red-50 rounded-lg w-fit">
              <h3 className="text-xl font-semibold  text-gray-900">
                Jak se má vyvíjet v čase<span className="text-red-400 text-2xl font-extrabold ml-1">?</span></h3>
            </div>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed text-center md:text-right text-gray-900 font-semibold mb-8">
            Web je výsledek rozhodnutí. <br />Ne jejich začátek.
          </p>
        </div>
      </div>
    </section>
  );
}

