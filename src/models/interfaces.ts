export interface AdoptModel {
    dog_info_id: string;    // 유기견 정보 id
    color_cd: string;       // 색상
    age: string;            // 나이
    weight: string;         // 체중
    kind_cd: string;        // 품종
    notice_comment: string; // 특이사항
    neuter_yn: 'y' | 'n';   // 중성화 여부
    special_mark: string;   // 특징
    care_nm: string;        // 보호소 이름
    care_tel: string;       // 보호소 전화번호
    care_addr: string;      // 보호 장소
    org_nm: string;         // 관할 기관
    change_nm: string;      // 담당자
    officetel: string;      // 담당자 연락처
    happen_place: string;   // 발견 장소
    inoculation_status: string; // 접종 상태
    euthanasia_date: string;    // 안락사 예정일
    dog_id: string;         // 유기견 id
    create_date: string;    // 작성일
    update_date: string;    // 수정일
    delete_Date?: string;    // 삭제일
    images: string[];        // 이미지 array
}
