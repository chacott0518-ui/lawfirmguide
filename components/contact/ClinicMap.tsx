import { CONTACT } from "@/config/contact";

/**
 * 제휴 확정 전 위치 안내 영역.
 * 실제 주소·상담 가능 여부·특정 로펌명을 만들지 않는다.
 */
export function ClinicMap() {
  const locationLabel =
    CONTACT.locationNote?.trim() || "제휴 확정 후 위치 안내 예정";

  return (
    <section
      id="clinic-map"
      className="cg-clinic-map"
      aria-labelledby="clinic-map-title"
    >
      <div
        className="cg-clinic-map__frame cg-clinic-map__frame--placeholder"
        aria-hidden="true"
      >
        <div className="cg-clinic-map__placeholder">
          <span className="cg-clinic-map__road cg-clinic-map__road--h" />
          <span className="cg-clinic-map__road cg-clinic-map__road--h2" />
          <span className="cg-clinic-map__road cg-clinic-map__road--v" />
          <span className="cg-clinic-map__road cg-clinic-map__road--v2" />
          <span className="cg-clinic-map__block cg-clinic-map__block--a" />
          <span className="cg-clinic-map__block cg-clinic-map__block--b" />
          <span className="cg-clinic-map__block cg-clinic-map__block--c" />
          <span className="cg-clinic-map__pin" />
          <div className="cg-clinic-map__insert-label">
            <span className="cg-clinic-map__insert-title">위치 안내</span>
            <span className="cg-clinic-map__insert-desc">
              제휴 확정 후 지도로 안내할 예정입니다
            </span>
          </div>
        </div>
      </div>

      <p className="cg-clinic-map__loc-title" id="clinic-map-title">
        {locationLabel}
      </p>
    </section>
  );
}
