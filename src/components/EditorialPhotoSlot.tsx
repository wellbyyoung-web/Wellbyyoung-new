import { useState } from 'react';
import type { ImageSlotConfig } from '../data/siteContent';

interface EditorialPhotoSlotProps {
  config: ImageSlotConfig;
  aspectClass?: string;
  className?: string;
  showCaption?: boolean;
  captionIndex?: string;
  overlayKicker?: string;
  overlayTitle?: string;
}

function EditorialPlateArtwork({ motif }: { motif: ImageSlotConfig['motif'] }) {
  if (motif === 'table') {
    return (
      <svg
        viewBox="0 0 960 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-cover"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="roomWall" x1="0" y1="0" x2="960" y2="540" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DDD3C2" />
            <stop offset="50%" stopColor="#E9E2D4" />
            <stop offset="100%" stopColor="#D6CCB8" />
          </linearGradient>
          <linearGradient id="gardenLight" x1="620" y1="0" x2="620" y2="420" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FAF8F2" />
            <stop offset="55%" stopColor="#EFF2EA" />
            <stop offset="100%" stopColor="#DCE3D6" />
          </linearGradient>
          <linearGradient id="sunWash" x1="690" y1="20" x2="260" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#FFFDF7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="oakTop" x1="120" y1="365" x2="840" y2="540" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#CBB89D" />
            <stop offset="50%" stopColor="#D5C4AC" />
            <stop offset="100%" stopColor="#B9A385" />
          </linearGradient>
          <linearGradient id="woodPanel" x1="0" y1="0" x2="240" y2="450" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C9B294" />
            <stop offset="100%" stopColor="#B59B7B" />
          </linearGradient>
          <linearGradient id="linenCurtain" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E6DFD3" stopOpacity="0.92" />
            <stop offset="30%" stopColor="#F5F1E8" stopOpacity="0.72" />
            <stop offset="70%" stopColor="#DFD6C7" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#EFEAE0" stopOpacity="0.65" />
          </linearGradient>
          <radialGradient id="ceramicVase" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#EAE5DC" />
            <stop offset="100%" stopColor="#CFC7B8" />
          </radialGradient>
          <filter id="heroSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="heroGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.035" />
            </feComponentTransfer>
          </filter>
        </defs>

        {/* Warm plaster interior */}
        <rect width="960" height="540" fill="url(#roomWall)" />

        {/* Left warm wood paneling & sliding door frame */}
        <rect x="0" y="0" width="215" height="440" fill="url(#woodPanel)" />
        <line x1="72" y1="0" x2="72" y2="440" stroke="#9D8364" strokeOpacity="0.35" strokeWidth="1.5" />
        <line x1="144" y1="0" x2="144" y2="440" stroke="#9D8364" strokeOpacity="0.35" strokeWidth="1.5" />
        <rect x="215" y="0" width="16" height="440" fill="#B69B79" />

        {/* Large sunlit garden window */}
        <rect x="440" y="0" width="520" height="410" fill="url(#gardenLight)" />

        {/* Soft distant garden foliage & traditional roofline hint */}
        <path d="M510 130C555 88 635 80 690 120C745 86 835 92 895 142V360H510V130Z" fill="#788C7A" fillOpacity="0.28" />
        <path d="M565 168C615 128 690 132 740 165C795 124 880 134 940 186V360H565V168Z" fill="#5E7160" fillOpacity="0.24" />
        <path d="M720 74L835 44L960 88V108L835 66L720 92V74Z" fill="#6D726E" fillOpacity="0.24" />

        {/* Left & Right sheer linen curtains */}
        <rect x="436" y="0" width="128" height="410" fill="url(#linenCurtain)" />
        <rect x="752" y="0" width="208" height="410" fill="url(#linenCurtain)" />
        <line x1="472" y1="0" x2="472" y2="410" stroke="#C8BFAE" strokeOpacity="0.45" strokeWidth="1.5" />
        <line x1="516" y1="0" x2="516" y2="410" stroke="#C8BFAE" strokeOpacity="0.38" strokeWidth="1.5" />
        <line x1="802" y1="0" x2="802" y2="410" stroke="#C8BFAE" strokeOpacity="0.45" strokeWidth="1.5" />
        <line x1="862" y1="0" x2="862" y2="410" stroke="#C8BFAE" strokeOpacity="0.38" strokeWidth="1.5" />

        {/* Diagonal warm sunlight wash across room and oak table */}
        <polygon points="520,0 820,0 440,540 120,540" fill="url(#sunWash)" />

        {/* Background calm armchair & ceramic moon jar */}
        <ellipse cx="148" cy="392" rx="44" ry="44" fill="#CFC4B3" />
        <rect x="18" y="340" width="96" height="90" rx="18" fill="#E9E4DA" />

        {/* Foreground warm natural oak table */}
        <polygon points="90,392 960,362 960,540 30,540" fill="url(#oakTop)" />
        <line x1="90" y1="392" x2="960" y2="362" stroke="#9F8B6F" strokeOpacity="0.32" strokeWidth="1.5" />

        {/* Soft cast shadows on oak table */}
        <ellipse cx="645" cy="412" rx="58" ry="12" fill="#303532" fillOpacity="0.16" filter="url(#heroSoftShadow)" />
        <ellipse cx="478" cy="422" rx="34" ry="9" fill="#303532" fillOpacity="0.14" filter="url(#heroSoftShadow)" />

        {/* Clear glass of water on oak table */}
        <path
          d="M454 374H502L496 420C496 423 488 425 478 425C468 425 460 423 460 420L454 374Z"
          fill="#FFFFFF"
          fillOpacity="0.38"
          stroke="#FFFFFF"
          strokeOpacity="0.7"
          strokeWidth="1.4"
        />
        <ellipse cx="478" cy="374" rx="24" ry="4.5" fill="#FFFFFF" fillOpacity="0.45" />
        <ellipse cx="478" cy="392" rx="22" ry="4" fill="#DCE5DF" fillOpacity="0.45" />

        {/* Handmade ceramic vase with fresh sage green leaves */}
        <path
          d="M618 320C604 344 596 382 606 404C613 414 630 417 645 417C660 417 677 414 684 404C694 382 686 344 672 320H618Z"
          fill="url(#ceramicVase)"
        />
        <ellipse cx="645" cy="320" rx="27" ry="6" fill="#DDD5C7" />

        {/* Organic sage & olive stems */}
        <path d="M645 320C638 272 618 228 588 188" stroke="#4E6150" strokeWidth="2" strokeLinecap="round" />
        <path d="M647 320C654 268 672 218 708 176" stroke="#4E6150" strokeWidth="2" strokeLinecap="round" />
        <path d="M645 320C646 264 648 214 652 162" stroke="#5E7160" strokeWidth="1.8" strokeLinecap="round" />

        <ellipse cx="596" cy="212" rx="15" ry="7" transform="rotate(-32 596 212)" fill="#788C7A" />
        <ellipse cx="620" cy="242" rx="14" ry="6.5" transform="rotate(24 620 242)" fill="#627564" />
        <ellipse cx="582" cy="186" rx="13" ry="6" transform="rotate(-18 582 186)" fill="#849886" />
        <ellipse cx="654" cy="196" rx="15" ry="7" transform="rotate(14 654 196)" fill="#788C7A" />
        <ellipse cx="638" cy="172" rx="13" ry="6" transform="rotate(-22 638 172)" fill="#5E7160" />
        <ellipse cx="690" cy="202" rx="16" ry="7" transform="rotate(28 690 202)" fill="#788C7A" />
        <ellipse cx="712" cy="174" rx="14" ry="6" transform="rotate(18 712 174)" fill="#8B9E8D" />
        <ellipse cx="672" cy="236" rx="14" ry="6.5" transform="rotate(-16 672 236)" fill="#5E7160" />

        <rect width="960" height="540" filter="url(#heroGrain)" />
      </svg>
    );
  }

  if (motif === 'lecture') {
    return (
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-cover"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="studioWall2" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5F2EA" />
            <stop offset="100%" stopColor="#E6DFD2" />
          </linearGradient>
          <linearGradient id="windowGlow2" x1="420" y1="20" x2="220" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="oakSurface2" x1="120" y1="250" x2="500" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D7C9B4" />
            <stop offset="100%" stopColor="#C1B097" />
          </linearGradient>
          <filter id="lectureBlur2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="lectureGrain2">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.03" />
            </feComponentTransfer>
          </filter>
        </defs>

        <rect width="600" height="400" fill="url(#studioWall2)" />
        <rect x="356" y="34" width="188" height="250" fill="#FFFFFF" fillOpacity="0.74" />
        <line x1="450" y1="34" x2="450" y2="284" stroke="#D8D0C2" strokeWidth="2" />
        <line x1="356" y1="158" x2="544" y2="158" stroke="#D8D0C2" strokeWidth="1.5" />
        <polygon points="356,34 544,34 360,400 90,400" fill="url(#windowGlow2)" />

        <rect x="64" y="64" width="238" height="154" rx="4" fill="#FFFFFF" fillOpacity="0.84" stroke="#303532" strokeOpacity="0.08" />
        <line x1="94" y1="104" x2="210" y2="104" stroke="#4E6150" strokeWidth="2" strokeOpacity="0.55" />
        <line x1="94" y1="132" x2="262" y2="132" stroke="#303532" strokeWidth="1.5" strokeOpacity="0.16" />
        <line x1="94" y1="154" x2="246" y2="154" stroke="#303532" strokeWidth="1.5" strokeOpacity="0.14" />
        <line x1="94" y1="176" x2="220" y2="176" stroke="#303532" strokeWidth="1.5" strokeOpacity="0.12" />

        <rect x="0" y="284" width="600" height="116" fill="#E3DBCC" />
        <ellipse cx="290" cy="332" rx="190" ry="18" fill="#303532" fillOpacity="0.1" filter="url(#lectureBlur2)" />
        <polygon points="88,274 468,274 502,320 56,320" fill="url(#oakSurface2)" />
        <rect x="110" y="320" width="8" height="68" fill="#B2A187" />
        <rect x="440" y="320" width="8" height="68" fill="#B2A187" />

        <path d="M510 314H556L548 366H518L510 314Z" fill="#D5CEC0" />
        <path d="M533 314C532 268 528 220 542 178" stroke="#4E6150" strokeWidth="1.6" />
        <ellipse cx="520" cy="218" rx="16" ry="6" transform="rotate(-24 520 218)" fill="#788C7A" fillOpacity="0.78" />
        <ellipse cx="548" cy="200" rx="16" ry="6" transform="rotate(20 548 200)" fill="#788C7A" fillOpacity="0.7" />
        <ellipse cx="526" cy="188" rx="14" ry="5" transform="rotate(-18 526 188)" fill="#5E7160" fillOpacity="0.72" />

        <rect width="600" height="400" filter="url(#lectureGrain2)" />
      </svg>
    );
  }

  if (motif === 'consultation') {
    return (
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-cover"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="consultWall2" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5F2EA" />
            <stop offset="100%" stopColor="#E3DBCD" />
          </linearGradient>
          <radialGradient id="archLight2" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#F3EFE6" stopOpacity="0.45" />
          </radialGradient>
          <linearGradient id="chairFabric2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EFECE4" />
            <stop offset="100%" stopColor="#DCD5C6" />
          </linearGradient>
          <filter id="consultShadow2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          <filter id="consultGrain2">
            <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.032" />
            </feComponentTransfer>
          </filter>
        </defs>

        <rect width="600" height="400" fill="url(#consultWall2)" />
        <path
          d="M196 288V146C196 88.562 242.562 42 300 42C357.438 42 404 88.562 404 146V288H196Z"
          fill="url(#archLight2)"
        />
        <line x1="300" y1="42" x2="300" y2="288" stroke="#D5CCB9" strokeWidth="1.5" />

        <rect x="0" y="288" width="600" height="112" fill="#E1D8C7" />
        <ellipse cx="300" cy="358" rx="190" ry="20" fill="#303532" fillOpacity="0.1" filter="url(#consultShadow2)" />

        <path d="M116 226C116 202 134 188 162 188C190 188 204 206 204 232V292H116V226Z" fill="url(#chairFabric2)" />
        <rect x="112" y="286" width="96" height="18" rx="4" fill="#CFC6B5" />
        <line x1="126" y1="304" x2="122" y2="354" stroke="#9F927B" strokeWidth="4" strokeLinecap="round" />
        <line x1="194" y1="304" x2="198" y2="354" stroke="#9F927B" strokeWidth="4" strokeLinecap="round" />

        <path d="M396 232C396 206 410 188 438 188C466 188 484 202 484 226V292H396V232Z" fill="url(#chairFabric2)" />
        <rect x="392" y="286" width="96" height="18" rx="4" fill="#CFC6B5" />
        <line x1="406" y1="304" x2="402" y2="354" stroke="#9F927B" strokeWidth="4" strokeLinecap="round" />
        <line x1="474" y1="304" x2="478" y2="354" stroke="#9F927B" strokeWidth="4" strokeLinecap="round" />

        <ellipse cx="300" cy="276" rx="74" ry="12" fill="#CFC2AC" />
        <rect x="296" y="286" width="8" height="66" fill="#B5A68E" />
        <ellipse cx="300" cy="352" rx="34" ry="5" fill="#B5A68E" />

        <rect x="256" y="267" width="38" height="7" rx="1" fill="#F8F7F3" stroke="#4E6150" strokeOpacity="0.28" />
        <path d="M312 260H334L331 274H315L312 260Z" fill="#788C7A" fillOpacity="0.65" />

        <rect width="600" height="400" filter="url(#consultGrain2)" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 450 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full object-cover"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="deskWall2" x1="0" y1="0" x2="450" y2="600" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F6F3EB" />
          <stop offset="100%" stopColor="#E2DACB" />
        </linearGradient>
        <linearGradient id="deskBeam2" x1="420" y1="40" x2="80" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="deskShadow2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="deskGrain2">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.035" />
          </feComponentTransfer>
        </filter>
      </defs>

      <rect width="450" height="600" fill="url(#deskWall2)" />
      <polygon points="220,0 450,0 450,240 110,600 0,600" fill="url(#deskBeam2)" />

      <rect x="0" y="408" width="450" height="192" fill="#D9CEBC" />
      <line x1="0" y1="408" x2="450" y2="408" stroke="#303532" strokeOpacity="0.08" />

      <ellipse cx="195" cy="442" rx="115" ry="14" fill="#303532" fillOpacity="0.11" filter="url(#deskShadow2)" />
      <ellipse cx="328" cy="434" rx="44" ry="10" fill="#303532" fillOpacity="0.1" filter="url(#deskShadow2)" />

      <path d="M294 426L302 316H348L356 426C356 432 342 436 325 436C308 436 294 432 294 426Z" fill="#FFFFFF" fillOpacity="0.55" stroke="#4E6150" strokeOpacity="0.22" />
      <path d="M324 416C322 332 326 244 352 162" stroke="#4E6150" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M327 368C322 296 306 232 282 184" stroke="#5E7160" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="300" cy="236" rx="20" ry="11" transform="rotate(-28 300 236)" fill="#788C7A" fillOpacity="0.72" />
      <ellipse cx="352" cy="224" rx="22" ry="11" transform="rotate(24 352 224)" fill="#788C7A" fillOpacity="0.65" />
      <ellipse cx="328" cy="196" rx="19" ry="10" transform="rotate(-14 328 196)" fill="#5E7160" fillOpacity="0.74" />
      <ellipse cx="282" cy="204" rx="17" ry="9" transform="rotate(-36 282 204)" fill="#889C8A" fillOpacity="0.7" />
      <ellipse cx="355" cy="172" rx="16" ry="9" transform="rotate(18 355 172)" fill="#788C7A" fillOpacity="0.68" />

      <rect x="86" y="416" width="176" height="22" rx="2" fill="#4E6150" fillOpacity="0.82" />
      <rect x="96" y="396" width="156" height="20" rx="2" fill="#F8F7F3" stroke="#303532" strokeOpacity="0.14" />
      <rect x="114" y="378" width="128" height="18" rx="2" fill="#EAE5DC" stroke="#303532" strokeOpacity="0.12" />

      <path d="M214 432H252L247 456H219L214 432Z" fill="#F8F7F3" stroke="#303532" strokeOpacity="0.15" />
      <ellipse cx="233" cy="432" rx="19" ry="4" fill="#FFFFFF" />

      <rect width="450" height="600" filter="url(#deskGrain2)" />
    </svg>
  );
}

export function EditorialPhotoSlot({
  config,
  aspectClass = 'aspect-[16/10]',
  className = '',
  showCaption = true,
  captionIndex,
  overlayKicker,
  overlayTitle,
}: EditorialPhotoSlotProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(config.imageSrc) && !hasError;

  return (
    <figure className={`flex flex-col ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-[#303532]/10 bg-[#EAE5DC] shadow-[0_24px_56px_-28px_rgba(48,53,50,0.22)] ${aspectClass}`}
      >
        {showImage ? (
          <img
            src={config.imageSrc}
            alt={config.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={`h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.015] ${
              config.motif === 'portrait' ? 'object-top' : 'object-center'
            }`}
          />
        ) : (
          <div className="relative h-full w-full">
            <EditorialPlateArtwork motif={config.motif} />
          </div>
        )}

        {(overlayKicker || overlayTitle) && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1F2421]/78 via-[#1F2421]/35 to-transparent px-6 pt-16 pb-6 text-left sm:px-8 sm:pb-7">
            {overlayKicker && (
              <p className="font-serif text-xs font-medium tracking-[0.22em] uppercase text-[#F8F7F3]/90 sm:text-[13px]">
                {overlayKicker}
              </p>
            )}
            {overlayTitle && (
              <p className="mt-1.5 text-[15px] font-normal leading-snug tracking-[-0.01em] text-[#FFFFFF] sm:text-lg">
                {overlayTitle}
              </p>
            )}
          </div>
        )}
      </div>

      {showCaption && (
        <figcaption className="mt-3 flex items-center justify-between px-1 text-xs text-[#303532]/62">
          <span>
            {captionIndex && (
              <span className="mr-2 font-serif text-[11px] tabular-nums text-[#4E6150]">
                {captionIndex}
              </span>
            )}
            {config.slotLabel}
          </span>
          <span className="text-[11px] tracking-wide text-[#303532]/45">Well by Young</span>
        </figcaption>
      )}
    </figure>
  );
}
