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
    notice_sdt: string;      // 공고 시작일
    notice_edt: string;      // 공고 종료일
    desertion_no: number;    // 유기 번호
    done: boolean;           // 입양 여부 (front test)
}

export interface AdoptReviewModel {
    adopt_review_id: number;        // 후가 아이디
    adopt_writer_id: string;        // 작성자 아이디
    image: string;                  // 이미지
    adopt_info_id: number;          // 신청 정보 아이디
    adopt_review_title: string;     // 제목
    adopt_review_article: string;   // 본문 내용
    adopt_review_comment: string;   // 댓글
    adopt_review_createDate: string;// 후기 작성일
    adopt_review_editDate?: string;  // 후기 수정 날짜
    adopt_review_deleteDate?: string;// 후기 삭제 날짜
}
