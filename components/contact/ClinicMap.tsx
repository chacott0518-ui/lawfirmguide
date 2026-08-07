export function ClinicMap() {
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
            <span className="cg-clinic-map__insert-title">지도 삽입</span>
            <span className="cg-clinic-map__insert-desc">
              제휴 로펌 위치 안내 예정
            </span>
          </div>
        </div>
      </div>

      <p className="cg-clinic-map__loc-title" id="clinic-map-title">
        제휴 로펌 위치 안내 예정
      </p>
    </section>
  );
}
