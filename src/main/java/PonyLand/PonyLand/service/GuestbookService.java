package PonyLand.PonyLand.service;

import PonyLand.PonyLand.dao.GuestbookDAO;
import PonyLand.PonyLand.dto.GuestbookDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuestbookService {

    @Autowired
    GuestbookDAO dao;


    public int insert(GuestbookDTO dto) { return dao.insert(dto);}

    public int delect(int Guestbook_Seq) {return dao.delete(Guestbook_Seq); }

    public int update(GuestbookDTO dto) {return dao.update(dto); }

    public List<GuestbookDTO> select() {return dao.select();}

    public int count(String Guestbook_writer) {
        return dao.count(Guestbook_writer);
    }

    public int selectByDate(String Guestbook_writer){  //방명록 하루안에 올린 글 갯수
        return dao.selectByDate(Guestbook_writer);
    }

}
