package PonyLand.PonyLand.controller;

import PonyLand.PonyLand.dto.FamilyDTO;
import PonyLand.PonyLand.service.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/family/")
public class FamilyController {

    @Autowired
    private FamilyService service;

    @RequestMapping("getFamily")
    public String getFamily(FamilyDTO dto){

        service.getFamily(dto);

        return "redirect:/";
    }

    @RequestMapping("areTheyFamily")
    public String areTheyFamily(){
        String proposer = "aa";
        String proposed = "bb";
        service.areTheyFamily(proposer,proposed);
        return "redirect:/toMiniPage";
    }
}