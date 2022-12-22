package PonyLand.PonyLand.service;

import PonyLand.PonyLand.dao.ItemDAO;
import PonyLand.PonyLand.dto.ItemDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemDAO dao;

    public List<ItemDTO> findHorseById(String itemMeberId){
        String itemCategory = "horse";
        return dao.findHorseById(itemMeberId,itemCategory);
    }

    public void updateItem(ItemDTO dto){
        dto.setItemStatus(1);
        dao.updateItem(dto);
    }

    public ItemDTO findByItemSeq(String itemSeq){
        int seq = Integer.parseInt(itemSeq);
        return dao.findByItemSeq(seq);
    }

    public void updateOtherStatus(String imgSeq){
        int itemSeq = Integer.parseInt(imgSeq);
        dao.updateOtherStatus(itemSeq);
    }

    public ItemDTO findByItemStatus(String id){
        int itemStatus = 1;
        return dao.findByItemStatus(id,itemStatus);
    }

    public void updateCoordinate(ItemDTO dto){
        dao.updateCoordinate(dto);
    }
}